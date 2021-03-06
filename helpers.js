const functions = function(){
    var formatBytes = (bytes, decimals = 0) => {
        if(bytes === null) return 'Not Available';
        if (bytes === 0) return '0 Bytes';
        bytes = bytes*10;
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    return {
        formatBytes
    }
}();

exports.functions = functions;