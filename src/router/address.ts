import { getAdressController } from '../controller';
import { Router } from 'express';


const router = Router();

router.get('/provinces', (req, res) => {
  getAdressController().getAllProvinces().then(provinces => {
    res.json(provinces);
    res.end();
  });
});

router.get('/districts', (req, res) => {
  const province = Number(req.query.province);
  getAdressController().getAllDistrictsOfProvince(province).then(districts => {
    res.json(districts);
    res.end();
  });
});

router.get('/wards', (req, res) => {
  const district = Number(req.query.district);
  getAdressController().getAllWardsOfDistrict(district).then(wards => {
    res.json(wards);
    res.end();
  });
});

router.get('/services', (req, res) => {
  const district = Number(req.query.district);
  getAdressController().getAvailableServices(district).then(services => {
    res.json(services);
    res.end();
  });
});

export default router;