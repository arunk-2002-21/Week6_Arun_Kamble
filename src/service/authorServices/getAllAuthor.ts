import { Author } from '../../models/author'
import { Book } from '../../models/book'
import { authentication } from '../../common/authenticate';
import { Op } from 'sequelize';



export async function getAuthors(data: any, id: any) {
    try {
        const islogin: any = await authentication(data);
        if (islogin) {
            if (id) {
                const author: any = await Author.findOne({
                    where: {
                        name: id
                    }
                })
                const listOfBooks : any = await Book.findAll({
                    where: {
                        authors : {
                            [Op.contains]: [author.dataValues.name]
                        }
                    }
                })
                return { author, listOfBooks }
            } else {
                const allAuthor: any = await Author.findAll();
                return allAuthor;
            }
        } else {
            return "You are not logged In."
        }
    } catch (error) {
        return `Error in getting all authors:- ${error}`
    }
}