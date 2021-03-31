class Base {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return await this.model.create(data);
    }

    async findOne(data) {
        return await this.model.findOne(data);
    }

    async findAll(data) {
        return await this.model.findAll(data);
    }

    async update(data, where) {
        return await this.model.update(data, where);
    }
}

export default Base;