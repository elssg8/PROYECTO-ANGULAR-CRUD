import {Request, Response} from 'express';
import Producto from '../models/producto';

export const getProducts = async (req: Request, res: Response) => {
    const lisProducts = await Producto.findAll()
    res.json(lisProducts);
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}` 
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if (!product) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    } else {
        await product.destroy();
        res.json({
            msg: `El producto fue eliminado exitosamente!`
        })
    }
}

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Producto.create(body);
        res.json({
            msg: 'Producto creado exitosamente'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al crear el producto'
        })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    const product = await Producto.findByPk(id);

    try {
        if (product) {
            product.update(body);
            res.json({
                msg: 'Producto actualizado exitosamente'
            })
        } else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar el producto'
        })
    }

}