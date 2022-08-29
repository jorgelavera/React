import './cartwidget.css';

export function CartWidget(props) {
    return (
        <div className='canasta'>
            <span className="material-icons">shopping_cart</span>
            <span>{props.count}</span>
        </div>
    );
};

