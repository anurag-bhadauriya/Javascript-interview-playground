class FS_Proxy {

    constructor(fs_subject) {
        this.fs = fs_subject;
    }

    readFile( path, format, callBack) {
        if( path.match(/.md$|.MD$/) ){
            this.fs.readFile(path, format, (error, contents) => {
                if(error){
                    console.error(error);
                    return callBack(error);
                }
                return callBack(null, contents);

            });
        } else {
            return callBack( new Error(`Can only read markdown files !!!`));
        }
    }
}

module.exports = FS_Proxy;
