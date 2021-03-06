import ALink from '~/components/features/custom-link';

export default function ShopBanner(props) {
    const { subTitle = '', title = "Pool Shop", current = "Pool Shop" } = props;

    return (
        <div className="page-header" style={{ backgroundImage: `url( ./images/shop/shop_banner1.png )`, backgroundColor: "#3C63A4" }}>
            {
                subTitle ? <h3 className="page-subtitle">{subTitle}</h3> : ''
            }
            {
                title ? <h1 className="page-title">{title}</h1> : ''
            }
            <ul className="breadcrumb">
                <li><ALink href="/"><i className="d-icon-home"></i></ALink></li>
                <li className="delimiter">/</li>
                <li>{current}</li>
            </ul>
        </div>
    )
}