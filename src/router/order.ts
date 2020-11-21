import { getOrderController } from '../controller';
import { Router } from 'express';


const router = Router();

router.get('/estimate-cost', (req, res) => {
  const {height, width, length, weight, service_id, district_id, ward_code} = req.query;
  getOrderController().getFee({
    coupon: null,
    insurance_value: 0,
    length: Number(length),
    height: Number(height),
    to_district_id: Number(district_id),
    service_id: Number(service_id),
    to_ward_code: ward_code as string,
    weight: Number(weight),
    width: Number(width)
  }).then(estimate => {
    res.json(estimate);
    res.end();
  });
});

router.post('/create', (req, res) => {
  console.log(JSON.stringify(req.body));
  getOrderController().createOrder(req.body).then(order => {
    res.json(order);
    res.end();
  });
  
});

export default router;