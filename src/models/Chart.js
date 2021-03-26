import Sequelize, { Model } from 'sequelize';

class ChartModel extends Model {
    static init(connection) {
        super.init(
            {
                tittle : Sequelize.STRING,
                type : Sequelize.STRING,
                color : Sequelize.STRING,
                legend : Sequelize.STRING,
                label : Sequelize.STRING,
            }
        )
        return this;
    }

}

export default ChartModel;