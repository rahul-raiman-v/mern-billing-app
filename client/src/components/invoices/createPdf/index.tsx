import type { Invoice } from "../../../types";
import { Document, Page, Text, View, Font } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  src: "/fonts/Inter-Regular.ttf",
});

export const InvoicePDF = ({ invoice }: { invoice: Invoice }) => {
  return (
    <Document>
      <Page size="A4" style={{ padding: 32 }}>
        <View
          style={{
            backgroundColor: "#ffffff", // bg-white
            display: "flex", // flex
            flexDirection: "column", // flex-col
            rowGap: 16, // gap-y-4 (4 * 4px = 16px)
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Invoice</Text>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>
                Invoice Number #{invoice.invoiceNumber}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#7C3AED", // Tailwind's violet-500
                width: 40, // size-10 = 2.5rem = 40px
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 9999, // fully rounded = rounded-full
              }}
            >
              <Text
                style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 18 }}
              >
                {invoice.store.name.charAt(0).trim() !== ""
                  ? invoice.store.name.charAt(0)
                  : "F"}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#9CA3AF", // Tailwind's gray-400
              marginVertical: 10,
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {/* Billed By */}
            <View style={{ width: "48%" }}>
              <Text style={{ color: "#4B5563", fontSize: 12, fontWeight: 500 }}>
                Billed By:
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                {invoice.store.name.trim() !== ""
                  ? invoice.store.name
                  : "Frontend"}
              </Text>
              <Text style={{ color: "#4B5563", fontSize: 12, fontWeight: 500 }}>
                {invoice.store.address.trim() !== ""
                  ? invoice.store.address
                  : "address..."}
              </Text>
              <Text style={{ color: "#4B5563", fontSize: 12, fontWeight: 500 }}>
                {invoice.store.contactNumber.trim() !== ""
                  ? invoice.store.contactNumber
                  : "phone..."}
              </Text>
            </View>

            {/* Billed To */}
            <View style={{ width: "48%" }}>
              <Text style={{ color: "#4B5563", fontSize: 12, fontWeight: 500 }}>
                Billed To:
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                {invoice.client.name?.trim() !== ""
                  ? invoice.client.name
                  : "Frontend"}
              </Text>
              <Text style={{ color: "#4B5563", fontSize: 12, fontWeight: 500 }}>
                {invoice.client?.location?.trim() !== ""
                  ? invoice.client.location
                  : "address..."}
              </Text>
              <Text style={{ color: "#4B5563", fontSize: 12, fontWeight: 500 }}>
                {invoice.client?.phone?.trim() !== ""
                  ? invoice.client.phone
                  : "phone..."}
              </Text>
            </View>
          </View>
          {/* Grid with two columns */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {/* Date Issued */}
            <View style={{ width: "48%" }}>
              <Text style={{ color: "#4B5563", fontSize: 12, fontWeight: 500 }}>
                Date Issued:
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                {invoice.dateIssued.toDateString()}
              </Text>
            </View>

            {/* Due Date */}
            <View style={{ width: "48%" }}>
              <Text style={{ color: "#4B5563", fontSize: 12, fontWeight: 500 }}>
                Due Date:
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                {invoice.dueDate.toDateString()}
              </Text>
            </View>
          </View>

          {/* Horizontal rule*/}
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#9CA3AF", // Tailwind's gray-400
              marginVertical: 10,
            }}
          />
          <View>
            <Text style={{ color: "#6B7280", fontSize: 12 }}>
              Invoice Details
            </Text>

            {/* Table container */}
            <View
              style={{
                marginTop: 10,
                gap: 12,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Table Header */}
              <View
                style={{
                  flexDirection: "row",
                  border: "1px solid #9CA3AF",
                  padding: 12,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  backgroundColor: "#E5E5E5",
                  columnGap: 8,
                }}
              >
                <Text
                  style={{ width: "5.556%", fontWeight: "bold", fontSize: 12 }}
                >
                  S.No
                </Text>
                <Text
                  style={{ width: "27.778%", fontWeight: "bold", fontSize: 12 }}
                >
                  Items
                </Text>
                <Text
                  style={{ width: "16.667%", fontWeight: "bold", fontSize: 12 }}
                >
                  Quantity
                </Text>
                <Text
                  style={{ width: "16.667%", fontWeight: "bold", fontSize: 12 }}
                >
                  Free Quantity
                </Text>
                <Text
                  style={{ width: "16.667%", fontWeight: "bold", fontSize: 12 }}
                >
                  Unit Price
                </Text>
                <Text
                  style={{ width: "16.667%", fontWeight: "bold", fontSize: 12 }}
                >
                  Total
                </Text>
              </View>

              {/* Table Rows */}
              {invoice.items.map((row) => (
                <View key={row.id} style={{ flexDirection: "column" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 6,
                      paddingBottom: 6,
                      columnGap: 8,
                    }}
                  >
                    <Text style={{ width: "5.556%", fontSize: 12 }}>
                      {row.id}
                    </Text>
                    <Text style={{ width: "27.778%", fontSize: 12 }}>
                      {row.name}
                    </Text>
                    <Text
                      style={{
                        width: "16.667%",
                        fontSize: 12,
                        paddingLeft: 16,
                      }}
                    >
                      {row.quantity}
                    </Text>
                    <Text
                      style={{
                        width: "16.667%",
                        fontSize: 12,
                        paddingLeft: 16,
                      }}
                    >
                      {row.freeQuantity}
                    </Text>
                    <Text
                      style={{
                        width: "16.667%",
                        fontSize: 12,
                        paddingLeft: 16,
                      }}
                    >
                      {row.price}
                    </Text>
                    <Text
                      style={{ width: "16.667%", fontSize: 12, paddingLeft: 8 }}
                    >
                      {row.quantity * row.price}
                    </Text>
                  </View>

                  {/* Divider (like <hr>) */}
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: "#9CA3AF", // Tailwind gray-400
                      marginVertical: 4,
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Subtotal */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12 }}>Subtotal</Text>
              <Text style={{ fontSize: 12 }}>{invoice.subTotal}</Text>
            </View>

            {/* Discount */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12 }}>Discount</Text>
              <Text style={{ fontSize: 12 }}>{invoice.discount}</Text>
            </View>

            {/* Grand Total */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                Grand Total
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                {invoice.grandTotal}
              </Text>
            </View>
          </View>
          <View>
            {/* Notes box */}
            <View
              style={{
                borderWidth: 1,
                borderColor: "#9CA3AF", // border-gray-400
                padding: 12, // p-3 = 0.75rem = 12px
                backgroundColor: "#E5E5E5", // bg-neutral-200
                borderRadius: 8, // rounded-lg
              }}
            >
              {/* Heading */}
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>Notes</Text>

              {/* Note line with bullet */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 6,
                  gap: 8, // emulate gap-x-2
                }}
              >
                {/* Bullet dot */}
                <View
                  style={{
                    width: 6, // size-1.5 = 6px
                    height: 6,
                    borderRadius: 9999,
                    backgroundColor: "#737373", // bg-neutral-500
                  }}
                />

                {/* Note text */}
                <Text style={{ color: "#737373", fontSize: 12 }}>
                  Payment is due by {invoice?.dueDate.toDateString()}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>
              {invoice.store.name}
            </Text>
            <Text style={{ color: "#4B5563", fontSize: 12 }}>
              {invoice.store.contactNumber}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
