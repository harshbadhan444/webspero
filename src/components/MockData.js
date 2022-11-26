function createData(id,name, gender, birth, birthLocation, death, deathLocation, marriage, spouse) {
    return {id,name, gender, birth, birthLocation, death, deathLocation, marriage, spouse};
  }  
 export const rows = [
    createData(1,'Ben Finn', 'M' , '12/02/1988', 'Los Angeles', '12/02/1988', 'Los Angeles', '16/09/2006', 'Krsity Finn'),
    createData(2,'Krsity Finn', 'F' , '16/06/1988', 'California', '23/12/2009', 'Los Angeles', '16/09/2006', 'Ben Finn'),
    createData(3,'Claire Finn', 'F' , '12/07/2008', 'Los Angeles', '12/07/2008', 'Los Angeles', '16/09/2006', 'Ben Finn'),
    createData(4,'Jack Finn', 'M' , '02/09/2004', 'Los Angeles', '02/09/2004', 'Los Angeles', '16/09/2018', 'Elsia Babara'),
    createData(5,'Ben Finn', 'M' , '12/02/1988', 'Los Angeles', '12/02/1988', 'Los Angeles', '16/09/2006', 'Krsity Finn'),
  ];