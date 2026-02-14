#!/bin/bash

# Configuration
PLUGIN_NAME="plusmagi-search"
SOURCE_DIR="."
BUILD_DIR="../build"
TEMP_DIR="temp_build"
ZIP_FILE="${BUILD_DIR}/${PLUGIN_NAME}.zip"

# Clean up previous build
rm -rf "$TEMP_DIR"
rm -f "$ZIP_FILE"

# Create a clean folder for zip structure
mkdir -p "$TEMP_DIR/$PLUGIN_NAME"

# Copy essential files
cp "${SOURCE_DIR}/plusmagi-search.php" "$TEMP_DIR/$PLUGIN_NAME/"
cp "${SOURCE_DIR}/readme.txt" "$TEMP_DIR/$PLUGIN_NAME/"
cp "${SOURCE_DIR}/LICENSE" "$TEMP_DIR/$PLUGIN_NAME/"
cp -r "${SOURCE_DIR}/assets" "$TEMP_DIR/$PLUGIN_NAME/"

# (Optional: If we switch to TypeScript, we would compile here first)
# npm run compile

# Create Zip
echo "Creating zip file at ${ZIP_FILE}..."
cd "$TEMP_DIR" || exit
zip -r "$PLUGIN_NAME.zip" "$PLUGIN_NAME" -x "*.DS_Store" -x "__MACOSX"
mv "$PLUGIN_NAME.zip" "../$ZIP_FILE"

# Clean up temp
cd ..
rm -rf "$TEMP_DIR"

echo "Build complete! File saved to: ${ZIP_FILE}"
