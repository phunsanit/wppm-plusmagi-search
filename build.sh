#!/bin/bash

# Configuration
PLUGIN_SLUG="wppm-search"
SOURCE_DIR="./SourceCode"
BUILD_DIR="./build"
ZIP_FILE="${BUILD_DIR}/${PLUGIN_SLUG}.zip"
TEMP_DIR="temp_build"

main() {
	# Navigate to the script's directory (project root)
	cd "$(dirname "$0")" || exit

	echo "Building ${PLUGIN_SLUG}..."

	setup_build_dir
	cleanup_previous_build
	prepare_structure
	copy_files
	create_zip
	cleanup_temp

	echo "Build complete: $(pwd)/build/${PLUGIN_SLUG}.zip"
}

setup_build_dir() {
	mkdir -p "$BUILD_DIR"
}

cleanup_previous_build() {
	rm -rf "$TEMP_DIR"
	rm -f "$ZIP_FILE"
}

prepare_structure() {
	# Prepare temp directory structure
	mkdir -p "$TEMP_DIR/$PLUGIN_SLUG"
}

copy_files() {
	# Copy essential files
	echo "Copying files from $SOURCE_DIR..."
	cp "$SOURCE_DIR/wppm-search.php" "$TEMP_DIR/$PLUGIN_SLUG/"
	cp "$SOURCE_DIR/readme.txt" "$TEMP_DIR/$PLUGIN_SLUG/"
	cp "./README.md" "$TEMP_DIR/$PLUGIN_SLUG/"
	cp "$SOURCE_DIR/LICENSE" "$TEMP_DIR/$PLUGIN_SLUG/"
	cp -r "$SOURCE_DIR/assets" "$TEMP_DIR/$PLUGIN_SLUG/"
}

create_zip() {
	# Create zip in build/
	echo "Creating zip archive..."
	cd "$TEMP_DIR" || exit
	zip -qr "../build/${PLUGIN_SLUG}.zip" "$PLUGIN_SLUG" -x "*.DS_Store" -x "__MACOSX"
	cd ..
}

cleanup_temp() {
	# Cleanup temp folder
	rm -rf "$TEMP_DIR"
}

# Run main function
main
