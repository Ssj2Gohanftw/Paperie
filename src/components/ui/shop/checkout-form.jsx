"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "../button";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import QrCode from 'qrcode';
import axios from "axios";

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>

  );
}

const Toast = () => {

  return (

    <div className="fixed z-50 bottom-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 opacity-100">
      <div className="bg-green-300 text-white px-6 py-3 rounded-xl shadow-lg text-center text-lg font-medium">
        ✅ Submitted Successfully!
      </div>
    </div>



  );

}


const CheckoutForm = (props) => {
  const [open, setOpen] = useState(false);
  const [uid, setUid] = useState("");
  const [upiQrOpen, setUpiQrOpen] = useState(false);
  const [qrUrl, setQrUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phoneNo: "",
      transactionId: ""
      // quote: "",
    },
  });



  const ewwPhI = async (amount) => {

    let { address, email, name, phoneNo: phone } = form.getValues();
    let apiFormData = { address, email, name, phone }


    setLoading(true);
    const request = await axios.post("http://localhost:6942/api/customer",
      { ...apiFormData }
    );

    // reset the dialog form and close the popup
    form.reset();
    setOpen(false);


    const { _id: userId } = request.data.customer;


    // set variables 
    setUid(userId);
    setLoading(false);
    setUpiQrOpen(true);

    // add amount dynamically
    let upiURI = `upi://pay?pa=joselito@apl&pn=Rick%Astley&am=${amount}&cu=INR`;

    // create qr and set the image
    const url = await QrCode.toDataURL(upiURI, { width: 350 });
    setQrUrl(url);


  }

  const handleTransaction = async (data) => {

    console.log(uid);
    const { transactionId } = data;

    // send transaction to backend
    await axios.post("http://localhost:6942/api/transaction",
      {
        transactionId,
        customer: uid,
      }
    )


    // Close the upi qr dialog
    setUpiQrOpen(false);

    // Send toast notification 
    setSuccess(true);

    // close the toast after 3 seconds
    setTimeout(() => {
      setSuccess(false)
    }, 3000);
  }

  // sukanikadeak function
  const onSubmit = (data) => {
    // console.log(data);
    setOpen(false);
  };


  return (
    <>

      {/* This is for showing message after submisisno */}
      {success && <Toast />}

      {/* Below is the spinner */}
      {loading && <Spinner />}

      {/* dialog for transaction */}
      <Dialog open={upiQrOpen} onOpenChange={(open) => { if (!upiQrOpen) return; }} hideClose>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className={"text-3xl"}>Money pay time</DialogTitle>
            <DialogDescription className="text-xl text-center">
              gimme money or else no card
            </DialogDescription>
          </DialogHeader>

          {qrUrl && <img className="block mx-auto" src={qrUrl} alt="UPI QR Code" />}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleTransaction)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                rules={{
                  required: "Transaction Id is required",
                }}
                name="transactionId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Transaction ID</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Your transaction id after UPI payment"
                        {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <div className="flex justify-end">
                <Button type="submit" className="buyBtn" disabled={!form.formState.isValid} >Submit Transaction</Button>

              </div>
            </form>
          </Form>

        </DialogContent>
      </Dialog>

      {/* Dialog for user data input */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="hover:bg-green-900 buyBtn">Buy Now</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
            <DialogDescription>
              Fill in your details to complete the purchase.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        rules={{
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid Email",
                          },
                        }}
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                rules={
                  {
                    required: "Address is required",
                  }
                }

                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNo"
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* might add back in future */}
              {/* <FormField
              control={form.control}
              name="quote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customization</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  type="button"
                  className={"buyBtn"}
                  variant="secondary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={() => ewwPhI(props.price)}
                  disabled={!form.formState.isValid}

                >Place Order</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CheckoutForm;
