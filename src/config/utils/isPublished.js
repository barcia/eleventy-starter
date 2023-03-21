const isPublished = item => {
	const now = new Date();
	return item.date <= now && !item.data.draft;
}

module.exports = isPublished