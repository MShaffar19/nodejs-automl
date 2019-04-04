// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * A specification of a relational table.
 * The table's schema is represented via its child column specs. It is
 * pre-populated as part of ImportData by schema inference algorithm, the
 * version of which is a required parameter of ImportData InputConfig.
 * Note: While working with a table, at times the schema may be
 * inconsistent with the data in the table (e.g. string in a FLOAT64 column).
 * The consistency validation is done upon creation of a model.
 * Used by:
 *   *   Tables
 *
 * @property {string} name
 *   Output only. The resource name of the table spec.
 *   Form:
 *
 *   `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}`
 *
 * @property {string} timeColumnSpecId
 *   column_spec_id of the time column. Only used if the parent dataset's
 *   ml_use_column_spec_id is not set. Used to split rows into TRAIN, VALIDATE
 *   and TEST sets such that oldest rows go to TRAIN set, newest to TEST, and
 *   those in between to VALIDATE.
 *   Required type: TIMESTAMP.
 *   If both this column and ml_use_column are not set, then ML use of all rows
 *   will be assigned by AutoML. NOTE: Updates of this field will instantly
 *   affect any other users concurrently working with the dataset.
 *
 * @property {number} rowCount
 *   Output only. The number of rows (i.e. examples) in the table.
 *
 * @property {number} columnCount
 *   Output only. The number of columns of the table. That is, the number of
 *   child ColumnSpec-s.
 *
 * @property {Object[]} inputConfigs
 *   Output only. Input configs via which data currently residing in the table
 *   had been imported.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.automl.v1beta1.InputConfig}
 *
 * @property {string} etag
 *   Used to perform consistent read-modify-write updates. If not set, a blind
 *   "overwrite" update happens.
 *
 * @typedef TableSpec
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TableSpec definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/table_spec.proto}
 */
const TableSpec = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};