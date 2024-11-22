using { billdocapi } from '../db/billdoc-schema.cds';

service BillDoc {
    entity BillingDocument as projection on billdocapi.BillingDocument;
}

