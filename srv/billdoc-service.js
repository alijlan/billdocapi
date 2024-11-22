const cds = require('@sap/cds');

module.exports = cds.service.impl( async function () {
    const BD = await cds.connect.to("API_BILLING_DOCUMENT_SRV");
    this.on("READ", "BillingDocument", async(req) => {
        req.query.where("BillingDocument <> '' ");
        return await BD.transaction(req).send({
            query: req.query,
            headers: {
                apikey: process.env.apikey
            }
        });
    });
});