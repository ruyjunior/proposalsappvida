import { StyleSheet } from '@react-pdf/renderer';

const stylesPDF = StyleSheet.create({
    page: { padding: 30, flexDirection: 'column',
      backgroundColor:'white' },
    title: { fontSize: 14, marginBottom: 5 },
    subtitle: { fontSize: 12, marginBottom: 1 },
    chaphter: {fontSize: 10, padding: 5, marginTop: 1, backgroundColor: 'lightgray' },
    section: { display:'flex',flexDirection:'row', alignItems:'center', marginBottom: 0,  fontSize: 10, justifyContent: 'space-between'},
    field: { fontSize: 10, marginBottom: 5, display:'flex',flexDirection:'row', padding: 5, borderStyle: 'solid', borderWidth: 1, borderColor: '#000', borderTop: '0'  },
    image: {width: 100, height: 50, marginBottom: 10 },
    logo: { width: 100, height: 50, marginBottom: 10 },
    textContainer: { flex: 1, padding: 5 , marginBottom: 0},
    squareIcon: { fontSize: 16, color: 'black', marginRight: 5 },
    squareBox: {
        width: 10,
        height: 10,
        backgroundColor: 'gray',
        marginRight: 5,
    },
    table: { display: 'flex', width: '100%', borderStyle: 'solid', borderWidth: 1, borderColor: '#000' },
    tableRow: { flexDirection: 'row' },
    tableCellHeader: {
      flex: 1,
      backgroundColor: 'lightgray',
      padding: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#000',
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    tableCell: {
      flex: 1,
      padding: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#000',
      fontSize: 10,
      textAlign: 'center',
    },
    tableFirstCell: {
      flex: 1,
      padding: 1,
      paddingLeft: 5,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#000',
      fontSize: 10,
      textAlign: 'left',
      minWidth: '30px',
    },
    lastCell: { borderRightWidth: 0 },
});

export default stylesPDF;