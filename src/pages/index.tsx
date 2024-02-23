import {Button} from "@mui/material";

export default function Home() {
  return (
    <div style={{textAlign: 'center', marginTop: '5vh'}}>
        <Button variant={'outlined'} style={{backgroundColor: 'deeppink', color: 'white', marginRight: '1vw'}}>Pink Button</Button>
        <Button variant={'outlined'} style={{backgroundColor: 'blue', color: 'white', marginRight: '1vw'}}>Blue Button</Button>
        <Button variant={'outlined'} style={{backgroundColor: 'green', color: 'white', marginRight: '1vw'}}>Green Button</Button>
        <Button variant={'outlined'} style={{backgroundColor: 'purple', color: 'white', marginRight: '1vw'}}>Purple Button</Button>
        <Button variant={'outlined'} style={{backgroundColor: 'red', color: 'white'}}>Red Button</Button>
    </div>
  );
}
