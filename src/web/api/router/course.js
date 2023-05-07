import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth, isAdmin } from '../utils';
import Course from '../models/coursemodel';

const courseRouter = express.Router();
courseRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const searchKeyword = req.query.searchKeywordo
      ? {
          name: {
            $regex: req.query.searchKeyword,
            $options: 'i',
          },
        }
      : {};
    const course = await Course.find({ ...searchKeyword });
    res.send(products);
  })
);
courseRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(product);
  })
);

courseRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: 'sample product',
      description: 'sample desc',
      category: 'sample category',
      brand: 'sample brand',
      image: '/images/product-1.jpg',
    });
    const createdProduct = await product.save();
    if (createdProduct) {
      res
        .status(201)
        .send({ message: 'Product Created', product: createdProduct });
    } else {
      res.status(500).send({ message: 'Error in creating product' });
    }
  })
);
courseRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const courseId = req.params.id;
    const course = await Course.findById(productId);
    if (course) {
      data = req.body;

      const updatedcourse = await course.save();
      if (updatedProduct) {
        res.send({ message: 'Course', course: updatedCourse });
      } else {
        res.status(500).send({ message: 'Error in updaing course' });
      }
    } else {
      res.status(404).send({ message: 'Curse Not Found' });
    }
  })
);
courseRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (product) {
      const deletedCourse = await course.remove();
      res.send({ message: 'Product Deleted', course: deletedCourse });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

productRouter.post(
  '/:id/reviews',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const review = {
        rating: req.body.rating,
        comment: req.body.comment,
        user: req.user._id,
        name: req.user.name,
      };
      course.reviews.push(review);
      course.rating =
        course.reviews.reduce((a, c) => c.rating + a, 0) /
        course.reviews.length;
      course.numReviews = course.reviews.length;
      const updatedProduct = await course.save();
      res.status(201).send({
        message: 'Comment Created.',
        data: updatecourse.reviews[updatedCourse.reviews.length - 1],
      });
    } else {
      throw Error('course does not exist.');
    }
  })
);

export default courseRouter;
Footer;
