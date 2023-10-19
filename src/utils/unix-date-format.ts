import moment from 'moment';
import 'moment/locale/id';

moment.locale('id');

export const UnixDate = (date: number) => {
  if (date) {
    const tempDate = new Date(date * 1000);
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const tahun = tempDate.getFullYear();
    const bulan = months[tempDate.getMonth()];
    const tanggal = tempDate.getDate();
    const finalDate = `${tanggal} ${bulan} ${tahun} `;
    return finalDate;
  }
  return '';
};
