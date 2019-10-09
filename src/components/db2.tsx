const data = [
    {
      Name: 'wick, MS',
      ReportingDate: '01/07/1981',
      Submitter: "NGO",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '1478523698',
      ErrorCode: ['2018 Missing or Invalid Quantity']
    },
    {
      Name: 'Kohli, Virat',
      ReportingDate: '09/05/1988',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '8520369741',
      ErrorCode: ['2012 Missing or Invalid Account',
        '2013 Missing or Invalid Account',
        '2014 Missing or Invalid Price',
        '2015 Missing or Invalid Type',
        ' 2016 Missing or Invalid Symbol',
        '2017 Missing or Invalid orderID',
        '2018 Missing or Invalid originatingIMID',
        '2019 Missing or Invalid Reporting Date']
    },
    {
      Name: 'Sharma, Rohit',
      ReportingDate: '10/03/1987',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '7852111225',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Bumrah, Jasprit',
      ReportingDate: '02/26/1993',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '7425896314',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Kumar, Bhuvneshwar',
      ReportingDate: '02/05/1990',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '7412589630',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Jadeja, Ravindra',
      ReportingDate: '05/06/1988',
      Submitter: "BETA",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '0325698741',
      ErrorCode: ['Missing or Invalid originatingIMID 2018']
    },
    {
      Name: 'Dhawan, Shikhar',
      ReportingDate: '04/05/1985',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "New",
      firmROEID: '96332147850',
      ErrorCode: ['2014 Missing or Invalid Account',
        '2015 Missing or Invalid Price',
        '2016 Missing or Invalid Symbol',
        '2018 Missing or Invalid originatingIMID'
      ]
    },
    {
      Name: 'Pandya, Hardik',
      ReportingDate: '11/11/1993',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '5201236547',
      ErrorCode: ['2016 Missing or Invalid Symbol',
        '2017 Missing or Invalid Price'
      ]
    },
    {
      Name: 'Rahul, KL',
      ReportingDate: '09/10/1992',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '0303030303',
      ErrorCode: ['2017 Missing or Invalid orderID',
        '2018 Missing or Invalid originatingIMID',
        '2019 Missing or Invalid Reporting Date'
      ]
    },
    {
      Name: 'Pant, Rishabh',
      ReportingDate: '12/04/1997',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "New",
      firmROEID: '8796541230',
      ErrorCode: ['2016 Missing or Invalid orderID',
        '2017 Missing or Invalid Quantity',
        '2018 Missing or Invalid Price',
        '2019 Missing or Invalid Symbol'
      ]
    },
    {
      Name: 'Shami, Mohammed',
      ReportingDate: '10/10/1990',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '8520741963',
      ErrorCode: ['2013 Missing or Invalid Account',
        '2015 Missing or Invalid Price',
        '2017 Missing or Invalid Account',
        '2019 Missing or Invalid Symbol'
      ]
    },
    {
      Name: 'Yadav, Kuldeep',
      ReportingDate: '10/12/1994',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '5239521075',
      ErrorCode: ['2014 Missing or Invalid Account',
        '2016 Missing or Invalid Price',
        '2018 Missing or Invalid Account'
      ]
    },
    {
      Name: 'Chahal, Yuzvendra',
      ReportingDate: '11/02/1990',
      Submitter: "NGO",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '8520369741',
      ErrorCode: ['2016 Missing or Invalid orderID',
        'Missing or Invalid Symbol 2017',
        '2018 Missing or Invalid Price',
        'Missing or Invalid Price 2019'
      ]
    },
    {
      Name: 'Karthik, Dinesh',
      ReportingDate: '12/01/1985',
      Submitter: "BETA",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '7410259338',
      ErrorCode: ['2012 Missing or Invalid orderID',
        'Missing or Invalid Symbol 2014',
        '2016 Missing or Invalid Price',
        'Missing or Invalid Price 2018'
      ]
    },
    {
      Name: 'Kapil, Dev',
      ReportingDate: '07/07/1981',
      Submitter: "NGO",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '1478443698',
      ErrorCode: ['2018 Missing or Invalid Quantity']
    },
    {
      Name: 'Anil, Kumble',
      ReportingDate: '05/25/1988',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '8520999741',
      ErrorCode: ['2012 Missing or Invalid Account',
        '2013 Missing or Invalid Account',
        '2014 Missing or Invalid Price',
        '2015 Missing or Invalid Type',
        ' 2016 Missing or Invalid Symbol',
        '2017 Missing or Invalid orderID',
        '2018 Missing or Invalid originatingIMID',
        '2019 Missing or Invalid Reporting Date']
    },
    {
      Name: 'Saurav, Ganguly',
      ReportingDate: '12/23/1987',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '7858811225',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Ajay, Jadeja',
      ReportingDate: '11/16/1993',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '7995896314',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Adam, Gilcrist',
      ReportingDate: '07/15/1990',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '7478589630',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Sachin, Tendulkar',
      ReportingDate: '11/06/1988',
      Submitter: "BETA",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '0329898741',
      ErrorCode: ['Missing or Invalid originatingIMID 2018']
    },
    {
      Name: 'Harbhajan, Singh',
      ReportingDate: '12/05/1985',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "New",
      firmROEID: '96332147800',
      ErrorCode: ['2014 Missing or Invalid Account',
        '2015 Missing or Invalid Price',
        '2016 Missing or Invalid Symbol',
        '2018 Missing or Invalid originatingIMID'
      ]
    },
    {
      Name: 'Rahul, Dravid',
      ReportingDate: '11/11/1993',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '5205636547',
      ErrorCode: ['2016 Missing or Invalid Symbol',
        '2017 Missing or Invalid Price'
      ]
    },
    {
      Name: 'Ramesh, Lamba',
      ReportingDate: '09/08/1992',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '0303030903',
      ErrorCode: ['2017 Missing or Invalid orderID',
        '2018 Missing or Invalid originatingIMID',
        '2019 Missing or Invalid Reporting Date'
      ]
    },
    {
      Name: 'Azaruddin, Mohammad',
      ReportingDate: '02/04/1997',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "New",
      firmROEID: '8795641230',
      ErrorCode: ['2016 Missing or Invalid orderID',
        '2017 Missing or Invalid Quantity',
        '2018 Missing or Invalid Price',
        '2019 Missing or Invalid Symbol'
      ]
    },
    {
      Name: 'Shami, Kapoor',
      ReportingDate: '11/10/1990',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '8500741963',
      ErrorCode: ['2013 Missing or Invalid Account',
        '2015 Missing or Invalid Price',
        '2017 Missing or Invalid Account',
        '2019 Missing or Invalid Symbol'
      ]
    },
    {
      Name: 'wick, Kapoor',
      ReportingDate: '12/12/1994',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '5000521075',
      ErrorCode: ['2014 Missing or Invalid Account',
        '2016 Missing or Invalid Price',
        '2018 Missing or Invalid Account'
      ]
    },
    {
      Name: 'Kareena, Kapoor',
      ReportingDate: '12/22/1990',
      Submitter: "NGO",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '8500069741',
      ErrorCode: ['2016 Missing or Invalid orderID',
        'Missing or Invalid Symbol 2017',
        '2018 Missing or Invalid Price',
        'Missing or Invalid Price 2019'
      ]
    },
    {
      Name: 'Karishma, Kapoor',
      ReportingDate: '12/01/1985',
      Submitter: "BETA",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '7490059338',
      ErrorCode: ['2012 Missing or Invalid orderID',
        'Missing or Invalid Symbol 2014',
        '2016 Missing or Invalid Price',
        'Missing or Invalid Price 2018'
      ]
    },
    {
      Name: 'Dhoni, MS',
      ReportingDate: '01/07/1981',
      Submitter: "NGO",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '1478523698',
      ErrorCode: ['2018 Missing or Invalid Quantity']
    },
    {
      Name: 'Kohli, Virat',
      ReportingDate: '09/05/1988',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '8520369741',
      ErrorCode: ['2012 Missing or Invalid Account',
        '2013 Missing or Invalid Account',
        '2014 Missing or Invalid Price',
        '2015 Missing or Invalid Type',
        ' 2016 Missing or Invalid Symbol',
        '2017 Missing or Invalid orderID',
        '2018 Missing or Invalid originatingIMID',
        '2019 Missing or Invalid Reporting Date']
    },
    {
      Name: 'Sharma, Rohit',
      ReportingDate: '10/03/1987',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '7852111225',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Bumrah, Jasprit',
      ReportingDate: '02/26/1993',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '7425896314',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Kumar, Bhuvneshwar',
      ReportingDate: '02/05/1990',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '7412589630',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Jadeja, Ravindra',
      ReportingDate: '05/06/1988',
      Submitter: "BETA",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '0325698741',
      ErrorCode: ['Missing or Invalid originatingIMID 2018']
    },
    {
      Name: 'Dhawan, Shikhar',
      ReportingDate: '04/05/1985',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "New",
      firmROEID: '96332147850',
      ErrorCode: ['2014 Missing or Invalid Account',
        '2015 Missing or Invalid Price',
        '2016 Missing or Invalid Symbol',
        '2018 Missing or Invalid originatingIMID'
      ]
    },
    {
      Name: 'Pandya, Hardik',
      ReportingDate: '11/11/1993',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '5201236547',
      ErrorCode: ['2016 Missing or Invalid Symbol',
        '2017 Missing or Invalid Price'
      ]
    },
    {
      Name: 'Rahul, KL',
      ReportingDate: '09/10/1992',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '0303030303',
      ErrorCode: ['2017 Missing or Invalid orderID',
        '2018 Missing or Invalid originatingIMID',
        '2019 Missing or Invalid Reporting Date'
      ]
    },
    {
      Name: 'Pant, Rishabh',
      ReportingDate: '12/04/1997',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "New",
      firmROEID: '8796541230',
      ErrorCode: ['2016 Missing or Invalid orderID',
        '2017 Missing or Invalid Quantity',
        '2018 Missing or Invalid Price',
        '2019 Missing or Invalid Symbol'
      ]
    },
    {
      Name: 'Shami, Mohammed',
      ReportingDate: '10/10/1990',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '8520741963',
      ErrorCode: ['2013 Missing or Invalid Account',
        '2015 Missing or Invalid Price',
        '2017 Missing or Invalid Account',
        '2019 Missing or Invalid Symbol'
      ]
    },
    {
      Name: 'Yadav, Kuldeep',
      ReportingDate: '10/12/1994',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '5239521075',
      ErrorCode: ['2014 Missing or Invalid Account',
        '2016 Missing or Invalid Price',
        '2018 Missing or Invalid Account'
      ]
    },
    {
      Name: 'Chahal, Yuzvendra',
      ReportingDate: '11/02/1990',
      Submitter: "NGO",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '8520369741',
      ErrorCode: ['2016 Missing or Invalid orderID',
        'Missing or Invalid Symbol 2017',
        '2018 Missing or Invalid Price',
        'Missing or Invalid Price 2019'
      ]
    },
    {
      Name: 'Karthik, Dinesh',
      ReportingDate: '12/01/1985',
      Submitter: "BETA",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '7410259338',
      ErrorCode: ['2012 Missing or Invalid orderID',
        'Missing or Invalid Symbol 2014',
        '2016 Missing or Invalid Price',
        'Missing or Invalid Price 2018'
      ]
    },
    {
      Name: 'Kapil, Dev',
      ReportingDate: '07/07/1981',
      Submitter: "NGO",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '1478443698',
      ErrorCode: ['2018 Missing or Invalid Quantity']
    },
    {
      Name: 'Anil, Kumble',
      ReportingDate: '05/25/1988',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '8520999741',
      ErrorCode: ['2012 Missing or Invalid Account',
        '2013 Missing or Invalid Account',
        '2014 Missing or Invalid Price',
        '2015 Missing or Invalid Type',
        ' 2016 Missing or Invalid Symbol',
        '2017 Missing or Invalid orderID',
        '2018 Missing or Invalid originatingIMID',
        '2019 Missing or Invalid Reporting Date']
    },
    {
      Name: 'Saurav, Ganguly',
      ReportingDate: '12/23/1987',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "New",
      firmROEID: '7858811225',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'wick, Jadeja',
      ReportingDate: '11/16/1993',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '7995896314',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Adam, Gilcrist',
      ReportingDate: '07/15/1990',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '7478589630',
      ErrorCode: ['2016 Missing or Invalid Price']
    },
    {
      Name: 'Sachin, Tendulkar',
      ReportingDate: '11/06/1988',
      Submitter: "BETA",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '0329898741',
      ErrorCode: ['Missing or Invalid originatingIMID 2018']
    },
    {
      Name: 'Harbhajan, Singh',
      ReportingDate: '12/05/1985',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "New",
      firmROEID: '96332147800',
      ErrorCode: ['2014 Missing or Invalid Account',
        '2015 Missing or Invalid Price',
        '2016 Missing or Invalid Symbol',
        '2018 Missing or Invalid originatingIMID'
      ]
    },
    {
      Name: 'Rahul, Dravid',
      ReportingDate: '11/11/1993',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '5205636547',
      ErrorCode: ['2016 Missing or Invalid Symbol',
        '2017 Missing or Invalid Price'
      ]
    },
    {
      Name: 'Ramesh, Lamba',
      ReportingDate: '09/08/1992',
      Submitter: "BETA",
      Reporter: 'AEFA',
      Status: "In Progress",
      firmROEID: '0303030903',
      ErrorCode: ['2017 Missing or Invalid orderID',
        '2018 Missing or Invalid originatingIMID',
        '2019 Missing or Invalid Reporting Date'
      ]
    },
    {
      Name: 'Azaruddin, Mohammad',
      ReportingDate: '02/04/1997',
      Submitter: "NGO",
      Reporter: 'AEFA',
      Status: "New",
      firmROEID: '8795641230',
      ErrorCode: ['2016 Missing or Invalid orderID',
        '2017 Missing or Invalid Quantity',
        '2018 Missing or Invalid Price',
        '2019 Missing or Invalid Symbol'
      ]
    },
    {
      Name: 'Shami, Kapoor',
      ReportingDate: '11/10/1990',
      Submitter: "HRBF",
      Reporter: 'HRBF',
      Status: "In Progress",
      firmROEID: '8500741963',
      ErrorCode: ['2013 Missing or Invalid Account',
        '2015 Missing or Invalid Price',
        '2017 Missing or Invalid Account',
        '2019 Missing or Invalid Symbol'
      ]
    }
  ]

  export default data;