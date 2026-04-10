#!/bin/bash

# --- Configuration ---
PM_ORG_SLUG="plusmagi-site-search"
SOURCE_DIR="./SourceCode"
PM_ASSETS_SRC="./wp-assets"
SVN_ROOT="./SVN/${PM_ORG_SLUG}"
SVN_TRUNK="${SVN_ROOT}/trunk"
SVN_ASSETS="${SVN_ROOT}/assets"

main() {
	cd "$(dirname "$0")" || exit

	VERSION=$(grep -i "Version:" "$SOURCE_DIR/plusmagi-site-search.php" | awk -F: '{print $2}' | xargs)
	echo "📦 Preparing SVN for version: $VERSION"

	# 1. Sync SourceCode -> Trunk
	echo "🔄 Syncing trunk..."
	rsync -av --delete --exclude='.svn/' --exclude='.git/' "$SOURCE_DIR/" "$SVN_TRUNK/"

	# 2. Sync Images -> Assets (ข้ามไฟล์ .zip เสมอ)
	if [ -d "$PM_ASSETS_SRC" ]; then
		echo "🎨 Syncing banners/icons to SVN assets..."
		rsync -av --delete --exclude='.svn/' --exclude='*.zip' "$PM_ASSETS_SRC/" "$SVN_ASSETS/"
	fi

	# 3. SVN Status Update
	cd "$SVN_ROOT" || exit
	svn add --force trunk/* assets/* 2>/dev/null
	# ลบไฟล์ที่ต้นทางไม่มีออกจากการติดตามของ SVN
	svn status | grep '^\!' | awk '{print $2}' | xargs -I{} svn rm {}

	echo "---------------------------------------------------"
	echo "✅ SVN staging complete!"
	echo "📍 Path: $SVN_ROOT"
	echo "👉 ขั้นตอนต่อไป: 'svn commit' และสร้าง 'tags/$VERSION' ตามลำดับ"
	echo "---------------------------------------------------"
}

main