import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import Select from "react-select";

const Left = ({ formik, areaList, isMobile, companyList }) => {
  return (
    <Col
      sm="2"
      xs={12}
      className={`border ${
        !isMobile && "d-flex"
      } justify-content-center pt-5 pb-5 `}
    >
      <Form onSubmit={formik.handleSubmit}>
        {isMobile && (
          <>
            <Form.Group controlId="name">
              <Form.Control
                onChange={formik.handleChange}
                type="text"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group>
              <Select
                placeholder={"Company"}
                onChange={(select) =>
                  formik.setFieldValue("company", select.value)
                }
                options={companyList}
              />
            </Form.Group>
          </>
        )}
        <Form.Group controlId="job">
          <Form.Control
            type="text"
            onChange={formik.handleChange}
            placeholder="Job Name"
          />
        </Form.Group>
        <Form.Group controlId="area">
          <Select
            placeholder={"Area"}
            onChange={(select) => formik.setFieldValue("area", select.value)}
            options={areaList}
          />
        </Form.Group>

        <div className="text-center">
          <Form.Group>
            <Button className="pl-4 pr-4 w-100" variant="dark" type="submit">
              Search
            </Button>
          </Form.Group>
        </div>
      </Form>
    </Col>
  );
};

export default Left;
