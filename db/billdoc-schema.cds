namespace billdocapi;

using { API_BILLING_DOCUMENT_SRV as billdoc } from '../srv/external/API_BILLING_DOCUMENT_SRV.csn';

entity BillingDocument as projection on billdoc.A_BillingDocument;
