import {
  createOrderObjBluePrint,
  razorPayOrderObjBlueprint,
} from '../constants/objects';
import store from '../store';





export const razorPayObjCreator = (
  apiKey: string,
  total: number,
  rzorderId: string,
  orderString: any,
) => {
  console.log('>>>>>>>>>>>>>', rzorderId);
  console.log('orderString', orderString);

  try {
    const UserInfo = store.getState().user.userInfo;
    // const InvoiceState: invoiceObjType = store.getState().user.invoice;

    const rzorder = razorPayOrderObjBlueprint();
    rzorder.key = apiKey;
    rzorder.order_id = rzorderId;
    // if (total) {
    rzorder.amount = total * 100;
    // } else {
    // rzorder.amount = InvoiceState?.order_total * 100;
    // }
    rzorder.notes = {order_id: orderString};
    rzorder.description = 'Meats Today Order Id ' + orderString;
    // rzorder.notes = "Test";
    rzorder.prefill.email = UserInfo.user_email;
    rzorder.prefill.contact = UserInfo.user_phone_number;
    rzorder.prefill.name = UserInfo.user_name;
    return rzorder;
  } catch (err) {
    console.log(err);
    return false;
  }
};
