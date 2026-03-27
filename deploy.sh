#!/bin/bash

# --- Configuration ---
# This is the slug of your plugin in the WordPress.org repository.
WP_ORG_SLUG="wppm-search"

# The local directory where you checked out the SVN repository.
# This should match the directory name you used in your 'svn checkout' command.
# Example: svn checkout https://plugins.svn.wordpress.org/wp-search/ my-local-plugin-name
SVN_CHECKOUT_DIR="wppm-search"

# --- Paths ---
SOURCE_DIR="./SourceCode"
PROJECT_ROOT="."
SVN_PATH="./SVN/${SVN_CHECKOUT_DIR}"
SVN_TRUNK="${SVN_PATH}/trunk"
SVN_ASSETS="${SVN_PATH}/assets"

# --- Main Function ---
main() {
	# Navigate to the script's directory to ensure paths are correct
	cd "$(dirname "$0")" || exit

	# Get version from plugin file
	PLUGIN_VERSION=$(grep -i "Version:" "$SOURCE_DIR/wppm-search.php" | awk -F: '{print $2}' | xargs)

	if [ -z "$PLUGIN_VERSION" ]; then
		echo "❌ Error: Could not find plugin version in '${SOURCE_DIR}/wppm-search.php'"
		exit 1
	fi
	echo "ℹ️  Plugin version detected: ${PLUGIN_VERSION}"

	echo "Preparing to deploy plugin to local SVN directory..."

	# 1. Validate that the SVN checkout directory exists
	if [ ! -d "$SVN_TRUNK" ]; then
		echo "❌ Error: SVN trunk directory not found at '${SVN_TRUNK}'"
		echo "Please ensure you have checked out your repository into the correct location."
		echo "Your checkout command was: svn checkout https://plugins.svn.wordpress.org/${WP_ORG_SLUG}/ ${SVN_PATH}"
		exit 1
	fi

	# 2. Clean the trunk directory
	echo "🧹 Cleaning and preparing SVN trunk..."
	cd "$SVN_TRUNK" || exit
	# Delete all files that are currently tracked by SVN
	svn status | grep -v '^?' | awk '{print $2}' | xargs -I {} svn delete --force {}@
	cd - > /dev/null || exit
	# Remove any leftover untracked files (like empty directories)
	rm -rf "${SVN_TRUNK:?}/"*


	# 3. Copy plugin files to trunk
	echo "📦 Copying plugin files to '${SVN_TRUNK}'..."
	cp "${SOURCE_DIR}/wppm-search.php" "${SVN_TRUNK}/"
	cp "${SOURCE_DIR}/readme.txt" "${SVN_TRUNK}/"
	cp "${SOURCE_DIR}/LICENSE" "${SVN_TRUNK}/"
	if [ -d "${SOURCE_DIR}/assets" ]; then
		cp -r "${SOURCE_DIR}/assets" "${SVN_TRUNK}/"
	fi
	cp "${PROJECT_ROOT}/README.md" "${SVN_TRUNK}/"

	# 4. Add all new files to SVN
	echo "➕ Staging new files for commit..."
	cd "$SVN_TRUNK" || exit
	svn add --force ./*
	cd - > /dev/null || exit

	# 5. Final instructions
	echo ""
	echo "------------------------------------------------------------------"
	echo "✅ Files copied and staged in your local SVN trunk."
	echo ""
	echo "⚠️ IMPORTANT: Review the changes before committing!"
	echo "Navigate to the SVN directory and check the status: cd \"${SVN_PATH}\" && svn status"
	echo "If correct, commit to trunk: svn commit -m \"Prepare for version ${PLUGIN_VERSION}\""
	echo "Then, create a tag: svn copy trunk tags/${PLUGIN_VERSION}"
	echo "Finally, commit the tag: svn commit -m \"Tagging version ${PLUGIN_VERSION}\""
	echo "------------------------------------------------------------------"
	echo ""
	echo "💡 Tip: You may also want to add plugin assets (banner, icon) to the '${SVN_ASSETS}' directory."
}

# Run main function
main