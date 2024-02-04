public class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContactByAccountId(String accountId) {
        return [
            SELECT AccountId, Id, FirstName, LastName, Title, Phone, Email
            FROM Contact
            WHERE AccountId =: accountId
            limit 10
        ];
    }

}