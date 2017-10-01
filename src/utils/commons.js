let commons = {
    getMobileClassName: function (classNames) {
        if (window.isMobile) {
            classNames += ' mobile';
        } else {
            classNames += ' desktop';
        }

        return classNames;
    }
}
export default commons;