app.controller('InvoiceController', function ($scope, ProductService) {
    $scope.invoiceDate = new Date().toLocaleDateString();
    $scope.customerName = "Your Client Name";

  
    $scope.items = [
        { name: "Amoxicillin", qty: 2, price: 15.00, total: 30.00 },
        { name: "Paracetamol", qty: 1, price: 5.50, total: 5.50 },
        { name: "Amoxicillin", qty: 2, price: 15.00, total: 30.00 },
        { name: "Paracetamol", qty: 1, price: 5.50, total: 5.50 },
        { name: "Amoxicillin", qty: 2, price: 15.00, total: 30.00 },
        { name: "Paracetamol", qty: 1, price: 5.50, total: 5.50 },
        { name: "Amoxicillin", qty: 2, price: 15.00, total: 30.00 },
        { name: "Paracetamol", qty: 1, price: 5.50, total: 5.50 },
        { name: "Amoxicillin", qty: 2, price: 15.00, total: 30.00 },

    ];

    $scope.generateInvoice = function () {

        var tableBody = [
            [
                { text: 'ITEMS DESCRIPTION', style: 'tableHeader' },
                { text: 'QTY', style: 'tableHeader' },
                { text: 'UNIT PRICE', style: 'tableHeader' },
                { text: 'TOTAL', style: 'tableHeader' }
            ]
        ];

        var subTotal = 0;
        $scope.items.forEach(function (item) {
            subTotal += item.total;
            tableBody.push([
                {
                    stack: [
                        { text: item.name, bold: true },
                        { text: 'Prescription Medicine', fontSize: 9, color: 'gray' }
                    ],
                    margin: [0, 5]
                },
                { text: item.qty.toString(), margin: [0, 5] },
                { text: '$ ' + item.price.toFixed(2), margin: [0, 5] },
                { text: '$ ' + item.total.toFixed(2), margin: [0, 5] }
            ]);
        });

      
        tableBody.push([
            { text: '', colSpan: 4, border: [false, true, false, false], borderColor: ['#2c5da9'] },
            '', '', ''
        ]);

   
        var taxRate = 0.10;
        var taxAmount = subTotal * taxRate;
        var finalTotal = subTotal + taxAmount;

    
        var docDefinition = {
            content: [
              
                { canvas: [{ type: 'rect', x: 0, y: 0, w: 515, h: 2, color: '#2c5da9' }] },
                { text: 'INVOICE', style: 'mainHeader', margin: [0, 20, 0, 20] },
                {
                    columns: [
                        {
                            width: '*',
                            stack: [
                                { text: 'YOUR COMPANY NAME', bold: true },
                                '89 Your Company Street, City, State',
                                '123-456-7890',
                                'pharmacy@email.com'
                            ],
                            style: 'addressLabel'
                        },
                        {
                            width: 180,
                            stack: [
                                { text: 'BILLED TO', bold: true, color: '#2c5da9' },
                                $scope.customerName,
                                '34 Client Street, City, State',
                                'client@email.com'
                            ],
                            style: 'addressLabel',
                            alignment: 'left'
                        }
                    ]
                },

                {
                    margin: [0, 20, 0, 20],
                    columns: [
                        { width: '*', text: '' },
                        {
                            width: 180,
                            table: {
                                body: [
                                    [{ text: 'Invoice No', bold: true, border: [] }, { text: ': 000001', border: [] }],
                                    [{ text: 'Issue Date', bold: true, border: [] }, { text: ': ' + $scope.invoiceDate, border: [] }],
                                    [{ text: 'Due Date', bold: true, border: [] }, { text: ': 09/14/2026', border: [] }]
                                ]
                            },
                            layout: 'noBorders'
                        }
                    ]
                },

                {
                    table: {
                        headerRows: 1,
                        widths: ['*', 40, 80, 80],
                        body: tableBody
                    },
                    layout: {
                        hLineWidth: function (i, node) { return (i === 1) ? 0 : 0.5; },
                        vLineWidth: function () { return 0; },
                        hLineColor: function () { return '#e0e0e0'; }
                    }
                },
                {
                    columns: [
                        { width: '*', text: '' },
                        {
                            width: 180,
                            margin: [0, 10, 0, 0],
                            table: {
                                body: [
                                    [{ text: 'Sub Total', border: [] }, { text: '$ ' + subTotal.toFixed(2), border: [], alignment: 'right' }],
                                    [{ text: 'Tax (10%)', border: [] }, { text: '$ ' + taxAmount.toFixed(2), border: [], alignment: 'right' }],
                                    [
                                        { text: 'TOTAL', fillOpacity: 0.1, fillColor: '#2c5da9', color: '#2c5da9', bold: true },
                                        { text: '$ ' + finalTotal.toFixed(2), fillColor: '#2c5da9', color: 'white', bold: true, alignment: 'right' }
                                    ]
                                ]
                            }
                        }
                    ]
                },
                { text: 'THANK YOU FOR YOUR BUSINESS', style: 'footerTitle', margin: [0, 40, 0, 5] },
                { text: 'Invoice Terms:\nPayment is due within 30 days.', fontSize: 10 }
            ],
            styles: {
                mainHeader: { fontSize: 40, bold: true, color: '#2c5da9', letterSpacing: 2 },
                addressLabel: { fontSize: 10, lineHeight: 1.2 },
                tableHeader: { fillColor: '#2c5da9', color: 'white', bold: true, fontSize: 11, margin: [5, 2] },
                footerTitle: { fontSize: 12, bold: true, color: '#2c5da9' }
            }
        };

        pdfMake.createPdf(docDefinition).download('Pharmacy_Invoice.pdf');
    };
});