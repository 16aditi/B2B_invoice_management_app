package com.highradius.implementation;

import com.highradius.model.Invoice;

import java.sql.Connection;
import java.util.List;
import java.sql.SQLException;

public interface InvoiceDao {
	List<Invoice> getInvoice();
	void insertInvoice(Invoice invoice) throws SQLException;
	void updateInvoice(String id,Invoice invoice);
	void deleteInvoice(String id) throws SQLException;
	void deleteManyInvoice(String slNos) throws SQLException;
	Invoice getInvoiceId(String CUSTOMER_ORDER_ID);
	Connection getConnection();
}
