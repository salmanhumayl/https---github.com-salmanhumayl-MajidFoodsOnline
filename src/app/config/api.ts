import {environment} from 'src/environments/environment'

//https://itam.aje.ae/service/category/all
//http://192.168.86.110/Food
export const baseUrl=environment.production ? 'https://eservices.mirajfoods.ca/api' :'https://eservices.mirajfoods.ca/api'

export const MenuUrl=baseUrl+ '/Menu';;
export const ProductFilterUrl=baseUrl+ '/catalog';
export const ProductFilterbyCategoryUrl=baseUrl+ '/itembycategory';
export const AllProductUrl=baseUrl+ '/item';


export const OrderUrl=baseUrl+ '/order';
export const RegisterUrl=baseUrl+ '/Customer/Register/';
export const LoginUrl=baseUrl+ '/Login';
export const ForgetUrl=baseUrl+ '//ForgotPassword/Forgot';

export const ContactusUrl=baseUrl+ '/Mailmessage/contactus';

export const AreaChargesUrl=baseUrl+ '/delivery';
export const OrderStatusUrl=baseUrl+ '/OrderStatus';

export const HomeUrl=environment.production ? 'https://www.mirajfoods.ca/home' :'http://localhost:4200/home'




