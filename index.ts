import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const collection = "Programatic_fields";
const dropdownFieldName = "type_of_country2";
const dropdownChoices = [
  {
    text: "Restricted",
    value: "restricted",
  },
  {
    text: "Authorized",
    value: "authorized",
  },
];

const conditionalField1 = {
  collection: "Programatic_fields",
  field: "authorized",
  type: "json",
  schema: {
    name: "authorized",
    table: "Programatic_fields",
    data_type: "json",
    default_value: null,
    max_length: null,
    numeric_precision: null,
    numeric_scale: null,
    is_generated: false,
    generation_expression: null,
    is_nullable: true,
    is_unique: false,
    is_primary_key: false,
    has_auto_increment: false,
    foreign_key_column: null,
    foreign_key_table: null,
  },
  meta: {
    collection: "Programatic_fields",
    field: "authorized",
    special: ["cast-json"],
    interface: "select-multiple-dropdown",
    options: {
      choices: [
        {
          text: "Canada",
          value: "Canada",
        },
        {
          text: "USA",
          value: "usa",
        },
      ],
    },
    display: null,
    display_options: null,
    readonly: false,
    hidden: false,
    sort: null,
    width: "full",
    translations: null,
    note: null,
    conditions: [
      {
        name: "Hide when ",
        rule: {
          _and: [
            {
              [dropdownFieldName]: {
                _eq: "restricted",
              },
            },
          ],
        },
        hidden: true,
        options: {
          allowOther: false,
          allowNone: false,
          previewThreshold: 3,
        },
      },
    ],
    required: false,
    group: null,
    validation: null,
    validation_message: null,
  },
};

const conditionalField2 = {
  collection: "Programatic_fields",
  field: "restricted",
  type: "json",
  schema: {
    name: "restricted",
    table: "Programatic_fields",
    data_type: "json",
    default_value: null,
    max_length: null,
    numeric_precision: null,
    numeric_scale: null,
    is_generated: false,
    generation_expression: null,
    is_nullable: true,
    is_unique: false,
    is_primary_key: false,
    has_auto_increment: false,
    foreign_key_column: null,
    foreign_key_table: null,
  },
  meta: {
    collection: "Programatic_fields",
    field: "restricted",
    special: ["cast-json"],
    interface: "select-multiple-dropdown",
    options: {
      choices: [
        {
          text: "Albania",
          value: "albania",
        },
        {
          text: "Congo",
          value: "congo",
        },
      ],
    },
    display: null,
    display_options: null,
    readonly: false,
    hidden: false,
    sort: null,
    width: "full",
    translations: null,
    note: null,
    conditions: [
      {
        name: "Hide when ",
        rule: {
          _and: [
            {
              [dropdownFieldName]: {
                _eq: "authorized",
              },
            },
          ],
        },
        hidden: true,
        options: {
          allowOther: false,
          allowNone: false,
          previewThreshold: 3,
        },
      },
    ],
    required: false,
    group: null,
    validation: null,
    validation_message: null,
  },
};

const dropdownFieldMeta = {
  field: dropdownFieldName,
  collection: collection,
  type: "string",
  schema: {
    field: dropdownFieldName,
    table: collection,
    data_type: "varchar",
    default_value: null,
    max_length: 255,
    numeric_precision: null,
    numeric_scale: null,
    is_generated: false,
    generation_expression: null,
    is_nullable: true,
    is_unique: false,
    is_primary_key: false,
    has_auto_increment: false,
    foreign_key_column: null,
    foreign_key_table: null,
  },
  meta: {
    field: dropdownFieldName,
    special: null,
    interface: "select-dropdown",
    options: {
      choices: dropdownChoices,
    },
    display: null,
    display_options: null,
    readonly: false,
    hidden: false,
    sort: null,
    width: "full",
    translations: null,
    note: null,
    conditions: null,
    required: false,
    group: null,
    validation: null,
    validation_message: null,
  },
};

const instance = axios.create({
  baseURL: `${process.env.SERVER}fields/${collection}`,
  headers: {
    Authorization: "Bearer " + process.env.TOKEN,
  },
});

const createFields = async () => {
  try {
    const firstoutput = await instance({
      method: "post",
      data: dropdownFieldMeta,
    });
    const second = await instance({
      method: "post",
      data: conditionalField1,
    });
    const third = await instance({
      method: "post",
      data: conditionalField2,
    });
  } catch (error: any) {
    console.log(error.response.data.errors);
  }
};

createFields();
