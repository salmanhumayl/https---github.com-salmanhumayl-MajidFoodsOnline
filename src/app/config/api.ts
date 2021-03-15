import {environment} from 'src/environments/environment'

//https://itam.aje.ae/service/category/all
//http://192.168.86.110/Food
export const baseUrl=environment.production ? 'http://eservices.mirajfoods.ca/api' :'http://eservices.mirajfoods.ca/api'
export const ProductUrl=baseUrl+ '/catalog?iid=1';
export const ProductFilterUrl=baseUrl+ '/catalog';
export const ProductFilterbyCategoryUrl=baseUrl+ '/itembycategory';

export const AllProductUrl=baseUrl+ '/item';



export const CategoryAllUrl=baseUrl+ '/category/all';
export const MenuUrl=baseUrl+ '/Menu';;

export const OrderUrl=baseUrl+ '/order';
export const RegisterUrl=baseUrl+ '/Customer';
export const LoginUrl=baseUrl+ '/Login';
export const ForgetUrl=baseUrl+ '//ForgotPassword/Forgot';

export const AreaChargesUrl=baseUrl+ '/delivery';
export const OrderStatusUrl=baseUrl+ '/OrderStatus';

export const HomeUrl=environment.production ? 'http://www.mirajfoods.ca/home' :'http://localhost:4200/home'




