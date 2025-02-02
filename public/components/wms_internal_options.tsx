/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import React from 'react';
import { EuiLink, EuiSpacer, EuiText, EuiScreenReaderOnly } from '@elastic/eui';
import { FormattedMessage } from '@osd/i18n/react';

import { TextInputOption } from '../../../../src/plugins/charts/public';
import { WMSOptions } from '../common/types/external_basemap_types';

interface WmsInternalOptions {
  wms: WMSOptions;
  setValue: <T extends keyof WMSOptions>(paramName: T, value: WMSOptions[T]) => void;
}

function WmsInternalOptions({ wms, setValue }: WmsInternalOptions) {
  const wmsLink = (
    <EuiLink href="http://www.opengeospatial.org/standards/wms" target="_blank">
      <FormattedMessage id="maps_legacy.wmsOptions.wmsLinkText" defaultMessage="OGC standard" />
    </EuiLink>
  );
  const footnoteText = (
    <>
      <span aria-hidden="true">*</span>
      <FormattedMessage
        id="maps_legacy.wmsOptions.mapLoadFailDescription"
        defaultMessage="If this parameter is incorrect, maps will fail to load."
      />
    </>
  );
  const footnote = (
    <EuiScreenReaderOnly>
      <p>{footnoteText}</p>
    </EuiScreenReaderOnly>
  );

  const setOptions = <T extends keyof WMSOptions['options']>(
    paramName: T,
    value: WMSOptions['options'][T]
  ) =>
    setValue('options', {
      ...wms.options,
      [paramName]: value,
    });

  return (
    <>
      <EuiSpacer size="xs" />
      <EuiText size="xs">
        <FormattedMessage
          id="maps_legacy.wmsOptions.wmsDescription"
          defaultMessage="WMS is an {wmsLink} for map image services."
          values={{ wmsLink }}
        />
      </EuiText>
      <EuiSpacer size="m" />

      <TextInputOption
        label={
          <>
            <FormattedMessage id="maps_legacy.wmsOptions.wmsUrlLabel" defaultMessage="WMS url" />
            <span aria-hidden="true">*</span>
          </>
        }
        helpText={
          <>
            <FormattedMessage
              id="maps_legacy.wmsOptions.urlOfWMSWebServiceTip"
              defaultMessage="The URL of the WMS web service."
            />
            {footnote}
          </>
        }
        paramName="url"
        value={wms.url}
        setValue={setValue}
      />

      <TextInputOption
        label={
          <>
            <FormattedMessage
              id="maps_legacy.wmsOptions.wmsLayersLabel"
              defaultMessage="WMS layers"
            />
            <span aria-hidden="true">*</span>
          </>
        }
        helpText={
          <>
            <FormattedMessage
              id="maps_legacy.wmsOptions.listOfLayersToUseTip"
              defaultMessage="A comma separated list of layers to use."
            />
            {footnote}
          </>
        }
        paramName="layers"
        value={wms.options.layers}
        setValue={setOptions}
      />

      <TextInputOption
        label={
          <>
            <FormattedMessage
              id="maps_legacy.wmsOptions.wmsVersionLabel"
              defaultMessage="WMS version"
            />
            <span aria-hidden="true">*</span>
          </>
        }
        helpText={
          <>
            <FormattedMessage
              id="maps_legacy.wmsOptions.versionOfWMSserverSupportsTip"
              defaultMessage="The version of WMS the server supports."
            />
            {footnote}
          </>
        }
        paramName="version"
        value={wms.options.version}
        setValue={setOptions}
      />

      <TextInputOption
        label={
          <>
            <FormattedMessage
              id="maps_legacy.wmsOptions.wmsFormatLabel"
              defaultMessage="WMS format"
            />
            <span aria-hidden="true">*</span>
          </>
        }
        helpText={
          <>
            <FormattedMessage
              id="maps_legacy.wmsOptions.imageFormatToUseTip"
              defaultMessage="Usually image/png or image/jpeg. Use png if the server will return transparent layers."
            />
            {footnote}
          </>
        }
        paramName="format"
        value={wms.options.format}
        setValue={setOptions}
      />

      <TextInputOption
        label={
          <FormattedMessage
            id="maps_legacy.wmsOptions.wmsAttributionLabel"
            defaultMessage="WMS attribution"
          />
        }
        helpText={
          <FormattedMessage
            id="maps_legacy.wmsOptions.attributionStringTip"
            defaultMessage="Attribution string for the lower right corner."
          />
        }
        paramName="attribution"
        value={wms.options.attribution}
        setValue={setOptions}
      />

      <TextInputOption
        label={
          <>
            <FormattedMessage
              id="maps_legacy.wmsOptions.wmsStylesLabel"
              defaultMessage="WMS styles"
            />
            <span aria-hidden="true">*</span>
          </>
        }
        helpText={
          <>
            <FormattedMessage
              id="maps_legacy.wmsOptions.wmsServerSupportedStylesListTip"
              defaultMessage="A comma separated list of WMS server supported styles to use. Blank in most cases."
            />
            {footnote}
          </>
        }
        paramName="styles"
        value={wms.options.styles}
        setValue={setOptions}
      />

      <EuiText size="xs">
        <p aria-hidden="true">{footnoteText}</p>
      </EuiText>
    </>
  );
}

export { WmsInternalOptions };
