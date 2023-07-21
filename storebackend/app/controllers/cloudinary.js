import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config({path:'variables.env'});

//cloudinary config
cloudinary.config({ 
    cloud_name: 'dp5gjl9gv', 
    api_key: '619222797183995', 
    api_secret: 'ItwK1lJKO0XED-IhxTp-dVfivs8' 
  });

export default cloudinary;