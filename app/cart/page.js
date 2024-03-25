import Hi from './hi.js';

export default function Cart() {
  let 장바구니 = ['Tomatoes','Pasta']

  return (
    <div>
      <h4 className="title">Cart</h4>
        <CartItem item={ 장바구니[0] } />
        <CartItem item={ 장바구니[1] }/>
        <Hi />
        <Banner content="롯데" />
        <Banner content="우리" />
        <Btn color="blue" />
    </div>
  );
}

function Banner(props){
  return <h5>{ props.content }카드 어쩌구 저쩌구</h5>
}

function CartItem(props){
  return (
      <div className="cart-item">
        <p>{ props.item }</p>      
        <p>$40</p>      
        <p>1개</p>
      </div>      
  )
}

function Btn(props){
  return <button style={{ background : props.color }} >버튼임ㅅㄱ</button>
}

