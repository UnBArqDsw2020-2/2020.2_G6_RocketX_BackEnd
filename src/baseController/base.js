module.exports = class Base {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const res = await this.model.create(data);
        console.log(res)
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