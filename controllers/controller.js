import Invoice from "../models/invoiceModel.js";

export const saveToDb = async (req, res) => {
    try {
        console.log(req.file)
        const { items, discount, shipping, tax, amountPaid,balanceDue,data } = req.body;
        //   console.log(items, discount, shipping, tax, amountPaid,balanceDue,data)
          const newInvoice = new Invoice({
            items:items,
            discount: discount,
            shipping: shipping,
            tax: tax,
            amountPaid: amountPaid,
            balanceDue: balanceDue,
            companyInfo: {
              logo: data.companyInfo.logo,
              invoiceNumber: data.companyInfo.invoiceNumber,
              invoiceDate:data.companyInfo.invoiceDate,
              dueDate: data.companyInfo.dueDate,
              from: data.companyInfo.from,
              to: data.companyInfo.to
            },
            terms: data.terms,
            footNote: data.footNote
          });
        console.log(newInvoice)
        await newInvoice.save();
        console.log('saved')
        res.status(200).json({succcess:true,message:'invoice saved to DB'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

export const getInvoices = async (req, res) => {
    try {
        console.log('hi')
        let data = await Invoice.find()
        console.log(data)
        if (data) {
            res.status(200).json({ success: true, data })
        } else {
            res.status(402).json({ success: false, message: 'Failed to get ivoices' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error1!' });
    }
}