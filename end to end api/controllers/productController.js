import {
  createproductServices,
  getproductServices,
  updateproductServices,
  deleteproductServices,
} from "../services/productServices.js";
export let createproduct = async (req, res) => {
  let productDetails = req.body;
  console.log(productDetails);
  try {
    let stautus = await createproductServices(productDetails);
    if (stautus == "success") {
      res.send("product created succesfully").status(201);
    } else {
      res.send("error  creating product").status(400);
    }
  } catch (error) {
    res.send("error creating product").status(500);
  }
};
export let readproduct = async (req, res) => {
  try {
    let status = await getproductServices();
    if (status == "success") {
      return res.status(201).send("product read successfully");
    } else {
      return res.status(400).send("error: failed to fetch product");
    }
  } catch (error) {
    return res.status(500).send(`error occurred: ${error}`);
  }
};
export let updateproduct = async (req, res) => {
  const id = req.params.id;
  const product = req.body;
  try {
    let status = await updateproductServices(id, product);
    if (status == "success") {
      return res.status(201).send("product updated successfully");
    } else {
      return res.status(400).send("error: failed to fetch product");
    }
  } catch (error) {
    return res.status(500).send(`error occurred: ${error}`);
  }
};
export let deleteproduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
  try {
    let status = await deleteproductServices(id,product);
    if (status == "success") {
      return res.status(201).send("product deleted successfully");
    } else {
      return res.status(400).send("error: failed to delete product");
    }
  } catch (error) {
    return res.status(500).send(`error occurred: ${error}`);
  }
};
