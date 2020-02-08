import path from 'path';
export const addFileController = (req, res) => {
    let relPath = path.join(__dirname, '../static/documents.zip');
    res.download(relPath);
};