#!/bin/bash

# Navigate to the script's directory (project root)
cd "$(dirname "$0")" || exit

PLUGIN_SLUG="plusmagi-search"
SOURCE_DIR="./SourceCode"
BUILD_DIR="./build"
ZIP_FILE="${BUILD_DIR}/${PLUGIN_SLUG}.zip"
TEMP_DIR="temp_build"

echo "Building ${PLUGIN_SLUG}..."

# Setup build directory
mkdir -p "$BUILD_DIR"

# Cleanup previous build
rm -rf "$TEMP_DIR"
rm -f "$ZIP_FILE"

# Prepare temp directory structure
mkdir -p "$TEMP_DIR/$PLUGIN_SLUG"

# Copy essential files
echo "Copying files from $SOURCE_DIR..."
cp "$SOURCE_DIR/plusmagi-search.php" "$TEMP_DIR/$PLUGIN_SLUG/"
cp "$SOURCE_DIR/readme.txt" "$TEMP_DIR/$PLUGIN_SLUG/"
cp "./README.md" "$TEMP_DIR/$PLUGIN_SLUG/"
cp "$SOURCE_DIR/LICENSE" "$TEMP_DIR/$PLUGIN_SLUG/"
cp -r "$SOURCE_DIR/assets" "$TEMP_DIR/$PLUGIN_SLUG/"

# Create zip in build/
echo "Creating zip archive..."
cd "$TEMP_DIR" || exit
zip -r "../build/${PLUGIN_SLUG}.zip" "$PLUGIN_SLUG" -x "*.DS_Store" -x "__MACOSX"
cd ..

# Cleanup temp folder
rm -rf "$TEMP_DIR"

echo "Build complete: $(pwd)/build/${PLUGIN_SLUG}.zip"
