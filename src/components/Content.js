import React from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import ProductCard from "./Card";

const Content = ({
  products,
  _products,
  isMobile,
  loadMore,
  formik,
  companyList,
}) => {
  return (
    <Col className={!isMobile && "ml-3"} xs>
      {!isMobile && (
        <Form onSubmit={formik.handleSubmit}>
          <Row className="border p-4 ">
            <Form.Group className={"mr-4 w-25"} controlId="name">
              <Form.Control
                onChange={formik.handleChange}
                type="text"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="w-25 mr-4">
              <Select
                placeholder={"Company"}
                onChange={(select) =>
                  formik.setFieldValue("company", select.value)
                }
                options={companyList}
              />
            </Form.Group>
            <Form.Group>
              <Button type={"submit"} className="pl-4 pr-4" variant={"dark"}>
                Search
              </Button>
            </Form.Group>
          </Row>
        </Form>
      )}
      <InfiniteScroll
        dataLength={products.length}
        hasMore={products.length < _products.length}
        next={loadMore}
        loader={
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        }
        style={{ overflow: "none" }}
      >
        <Row className="bt-4 border p-4">
          {products.map((item, key) => (
            <ProductCard
              key={key}
              id={item.id}
              image={item.image}
              name={item.name}
              company={item.company}
              jobdescription={item.job}
            />
          ))}
        </Row>
      </InfiniteScroll>
    </Col>
  );
};

export default Content;
