function EmptyErrorImpl() {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
}
EmptyErrorImpl.prototype = Object.create(Error.prototype);
export var EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map