function findFolderByName(n) {
	try {
		return n === null ? null : (Folder.find({ name: n }) || Folder.create({ name: n }));
	} catch(e) {
		return null;
	}
}
