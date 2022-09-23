function CampoEntrada({ id, label, placeholder, type, name, value, onChange, required, readOnly, maxLength, validMessage, invalidMessage }) {
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">
                {label}
            </label>

            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={readOnly}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                maxLength={maxLength}
            />

            <div className="valid-feedback">
                {validMessage}
            </div>

            <div className="invalid-feedback">
                {invalidMessage}
            </div>
        </div>
    );
}

export default CampoEntrada;