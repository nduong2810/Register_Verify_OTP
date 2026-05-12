import { useState } from 'react';
import AppCard from '../ui/AppCard';
import AppButton from '../ui/AppButton';
import InputField from '../ui/InputField';
import FormAlert from '../ui/FormAlert';

export default function SharedVerifyOTP({ title, subtitle, email, loading, errorMessage, successMessage, onSubmitOTP, onBack }) {
    const [otp, setOtp] = useState('');

    const alertType = errorMessage ? 'error' : successMessage ? 'success' : 'info';
    const alertMessage = errorMessage || successMessage || `Đăng ký thành công! Vui lòng kiểm tra email: ${email} để lấy mã kích hoạt.`;

    return (
        <AppCard title={title} subtitle={subtitle}>
            <FormAlert type={alertType} message={alertMessage} />

            <form className="mt-4 space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmitOTP(otp); }}>
                <InputField
                    label="Mã OTP" name="otp" value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Nhập mã 6 chữ số"
                    required maxLength={6}
                    disabled={loading}
                />

                <div className="flex gap-3">
                    <AppButton variant="secondary" onClick={onBack} disabled={loading}>
                        Quay lại
                    </AppButton>
                    <AppButton type="submit" fullWidth disabled={loading || otp.length < 6}>
                        {loading ? 'Đang xác nhận...' : 'Xác nhận mã'}
                    </AppButton>
                </div>
            </form>
        </AppCard>
    );
}