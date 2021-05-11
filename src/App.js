import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Content from "./components/Content";
import Header from "./components/layout/Header";
import Left from "./components/Left";

const App = () => {
  const isMobile = !useMediaQuery({ query: "(max-width: 1224px)" });
  const [limit, setLimit] = useState(9);
  const [products, setProducts] = useState([]);
  const [_products, set_Products] = useState([]);
  const [areaList, setAreaList] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  useEffect(() => {
    getEntity();
  }, []);

  const getEntity = () => {
    fetch("https://5f7335deb63868001615f557.mockapi.io/list")
      .then((response) => response.json())
      .then((response) => {
        if (response.length !== 0) {
          var _areaList = [{ label: "All", value: "all" }];
          var _companyList = [{ label: "All", value: "all" }];
          response.map((item) => {
            _areaList.push({ label: item.area, value: item.area });
            _companyList.push({ label: item.company, value: item.company });
            return item;
          });
          setAreaList(_areaList);
          setCompanyList(_companyList);
          setProducts(response.slice(0, 9));
          set_Products(response);
        }
      });
  };
  const formik = useFormik({
    initialValues: {
      job: "",
      area: "",
      name: "",
      company: "",
    },
    onSubmit: (values) => {
      onFilter(values);
    },
  });

  const onFilter = (values) => {
    var item = _products
      .filter((filter) =>
        filter.name.toLowerCase().includes(values.name.toLowerCase())
      )
      .filter((filter) =>
        filter.job.toLowerCase().includes(values.job.toLowerCase())
      )
      .filter((filter) =>
        filter.area
          .toLowerCase()
          .includes(values.area === "all" ? "" : values.area.toLowerCase())
      )
      .filter((filter) =>
        filter.company
          .toLowerCase()
          .includes(
            values.company === "all" ? "" : values.company.toLowerCase()
          )
      );

    setProducts(item.slice(0, limit));
  };
  const loadMore = () => {
    setTimeout(() => {
      setLimit(limit + 9);
      limit < _products.length && setProducts(_products.slice(0, limit + 9));
    }, 500);
  };

  return (
    <div>
      <Header />
      <Row className={`m-2`}>
        <Left
          isMobile={!isMobile}
          formik={formik}
          areaList={areaList}
          companyList={companyList}
        />
        <Content
          formik={formik}
          isMobile={!isMobile}
          products={products}
          _products={_products}
          loadMore={loadMore}
          companyList={companyList}
          limit={limit}
        />
      </Row>
    </div>
  );
};

export default App;
