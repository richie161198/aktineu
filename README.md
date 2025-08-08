// Generated code for this PinCode Widget...
PinCodeTextField(
  autoDisposeControllers: false,
  appContext: context,
  length: 6,
  textStyle: FlutterFlowTheme.of(context).bodyLarge.override(
        fontFamily: FlutterFlowTheme.of(context).bodyLargeFamily,
        letterSpacing: 0,
        useGoogleFonts: GoogleFonts.asMap()
            .containsKey(FlutterFlowTheme.of(context).bodyLargeFamily),
      ),
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  enableActiveFill: false,
  autoFocus: true,
  enablePinAutofill: false,
  errorTextSpace: 16,
  showCursor: true,
  cursorColor: FlutterFlowTheme.of(context).primary,
  obscureText: false,
  hintCharacter: '●',
  keyboardType: TextInputType.number,
  pinTheme: PinTheme(
    fieldHeight: 44,
    fieldWidth: 44,
    borderWidth: 2,
    borderRadius: BorderRadius.only(
      bottomLeft: Radius.circular(12),
      bottomRight: Radius.circular(12),
      topLeft: Radius.circular(12),
      topRight: Radius.circular(12),
    ),
    shape: PinCodeFieldShape.box,
    activeColor: FlutterFlowTheme.of(context).primaryText,
    inactiveColor: FlutterFlowTheme.of(context).alternate,
    selectedColor: FlutterFlowTheme.of(context).primary,
    activeFillColor: FlutterFlowTheme.of(context).primaryText,
    inactiveFillColor: FlutterFlowTheme.of(context).alternate,
    selectedFillColor: FlutterFlowTheme.of(context).primary,
  ),
  controller: _model.pinCodeController,
  onChanged: (_) {},
  autovalidateMode: AutovalidateMode.onUserInteraction,
  validator: _model.pinCodeControllerValidator.asValidator(context),
)

// Generated code for this CreditCardForm Widget...
Padding(
  padding: EdgeInsetsDirectional.fromSTEB(12, 0, 12, 0),
  child: FlutterFlowCreditCardForm(
    formKey: _model.creditCardFormKey,
    creditCardModel: _model.creditCardInfo,
    obscureNumber: true,
    obscureCvv: false,
    spacing: 10,
    textStyle: FlutterFlowTheme.of(context).labelMedium.override(
          fontFamily: FlutterFlowTheme.of(context).labelMediumFamily,
          letterSpacing: 0,
          useGoogleFonts: GoogleFonts.asMap()
              .containsKey(FlutterFlowTheme.of(context).labelMediumFamily),
        ),
    inputDecoration: InputDecoration(
      enabledBorder: OutlineInputBorder(
        borderSide: BorderSide(
          color: FlutterFlowTheme.of(context).alternate,
          width: 2,
        ),
        borderRadius: BorderRadius.circular(8),
      ),
      focusedBorder: OutlineInputBorder(
        borderSide: BorderSide(
          color: FlutterFlowTheme.of(context).alternate,
          width: 2,
        ),
        borderRadius: BorderRadius.circular(8),
      ),
    ),
  ),
)
