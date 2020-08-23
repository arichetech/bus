import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',  redirectTo: 'sign-in', pathMatch: 'full'
  }, 
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'bus-confirm-booking',
    loadChildren: () => import('./bus-confirm-booking/bus-confirm-booking.module').then( m => m.BusConfirmBookingPageModule)
  },
  {
    path: 'bus-info',
    loadChildren: () => import('./bus-info/bus-info.module').then( m => m.BusInfoPageModule)
  },
  {
    path: 'bus-list',
    loadChildren: () => import('./bus-list/bus-list.module').then( m => m.BusListPageModule)
  },
  {
    path: 'bus-payment',
    loadChildren: () => import('./bus-payment/bus-payment.module').then( m => m.BusPaymentPageModule)
  },
  {
    path: 'bus-ticket',
    loadChildren: () => import('./bus-ticket/bus-ticket.module').then( m => m.BusTicketPageModule)
  },
  {
    path: 'cab-confirm-booking',
    loadChildren: () => import('./cab-confirm-booking/cab-confirm-booking.module').then( m => m.CabConfirmBookingPageModule)
  },
  {
    path: 'cab-info',
    loadChildren: () => import('./cab-info/cab-info.module').then( m => m.CabInfoPageModule)
  },
  {
    path: 'cab-list',
    loadChildren: () => import('./cab-list/cab-list.module').then( m => m.CabListPageModule)
  },
  {
    path: 'condition',
    loadChildren: () => import('./condition/condition.module').then( m => m.ConditionPageModule)
  },
  {
    path: 'confirm-booking',
    loadChildren: () => import('./confirm-booking/confirm-booking.module').then( m => m.ConfirmBookingPageModule)
  },
  {
    path: 'cab-payment',
    loadChildren: () => import('./cab-payment/cab-payment.module').then( m => m.CabPaymentPageModule)
  },
  {
    path: 'cab-ticket',
    loadChildren: () => import('./cab-ticket/cab-ticket.module').then( m => m.CabTicketPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'flight-info',
    loadChildren: () => import('./flight-info/flight-info.module').then( m => m.FlightInfoPageModule)
  },
  {
    path: 'flight-result',
    loadChildren: () => import('./flight-result/flight-result.module').then( m => m.FlightResultPageModule)
  },
  {
    path: 'flight-ticket',
    loadChildren: () => import('./flight-ticket/flight-ticket.module').then( m => m.FlightTicketPageModule)
  },
  {
    path: 'holiday-booked',
    loadChildren: () => import('./holiday-booked/holiday-booked.module').then( m => m.HolidayBookedPageModule)
  },
  {
    path: 'holiday-confirm-booking',
    loadChildren: () => import('./holiday-confirm-booking/holiday-confirm-booking.module').then( m => m.HolidayConfirmBookingPageModule)
  },
  {
    path: 'holiday-info',
    loadChildren: () => import('./holiday-info/holiday-info.module').then( m => m.HolidayInfoPageModule)
  },
  {
    path: 'holiday-list',
    loadChildren: () => import('./holiday-list/holiday-list.module').then( m => m.HolidayListPageModule)
  },
  {
    path: 'holiday-payment',
    loadChildren: () => import('./holiday-payment/holiday-payment.module').then( m => m.HolidayPaymentPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home-reviews',
    loadChildren: () => import('./home-reviews/home-reviews.module').then( m => m.HomeReviewsPageModule)
  },
  {
    path: 'homestay-booked',
    loadChildren: () => import('./homestay-booked/homestay-booked.module').then( m => m.HomestayBookedPageModule)
  },
  {
    path: 'homestay-confirm-booking',
    loadChildren: () => import('./homestay-confirm-booking/homestay-confirm-booking.module').then( m => m.HomestayConfirmBookingPageModule)
  },
  {
    path: 'homestay-info',
    loadChildren: () => import('./homestay-info/homestay-info.module').then( m => m.HomestayInfoPageModule)
  },
  {
    path: 'homestay-map',
    loadChildren: () => import('./homestay-map/homestay-map.module').then( m => m.HomestayMapPageModule)
  },
  {
    path: 'homestay-payment',
    loadChildren: () => import('./homestay-payment/homestay-payment.module').then( m => m.HomestayPaymentPageModule)
  },
  {
    path: 'homestay-photos',
    loadChildren: () => import('./homestay-photos/homestay-photos.module').then( m => m.HomestayPhotosPageModule)
  },
  {
    path: 'hotel-booked',
    loadChildren: () => import('./hotel-booked/hotel-booked.module').then( m => m.HotelBookedPageModule)
  },
  {
    path: 'hotel-confirm-booking',
    loadChildren: () => import('./hotel-confirm-booking/hotel-confirm-booking.module').then( m => m.HotelConfirmBookingPageModule)
  },
  {
    path: 'hotel-info',
    loadChildren: () => import('./hotel-info/hotel-info.module').then( m => m.HotelInfoPageModule)
  },
  {
    path: 'hotel-map',
    loadChildren: () => import('./hotel-map/hotel-map.module').then( m => m.HotelMapPageModule)
  },
  {
    path: 'hotel-payment',
    loadChildren: () => import('./hotel-payment/hotel-payment.module').then( m => m.HotelPaymentPageModule)
  },
  {
    path: 'hotel-photos',
    loadChildren: () => import('./hotel-photos/hotel-photos.module').then( m => m.HotelPhotosPageModule)
  },
  {
    path: 'hotel-review',
    loadChildren: () => import('./hotel-review/hotel-review.module').then( m => m.HotelReviewPageModule)
  },
  {
    path: 'hotels-list',
    loadChildren: () => import('./hotels-list/hotels-list.module').then( m => m.HotelsListPageModule)
  },
  {
    path: 'list-of-homestay',
    loadChildren: () => import('./list-of-homestay/list-of-homestay.module').then( m => m.ListOfHomestayPageModule)
  },
  {
    path: 'my-bookings',
    loadChildren: () => import('./my-bookings/my-bookings.module').then( m => m.MyBookingsPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'my-reviews',
    loadChildren: () => import('./my-reviews/my-reviews.module').then( m => m.MyReviewsPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'search-bus',
    loadChildren: () => import('./search-bus/search-bus.module').then( m => m.SearchBusPageModule)
  },
  {
    path: 'search-cab',
    loadChildren: () => import('./search-cab/search-cab.module').then( m => m.SearchCabPageModule)
  },
  {
    path: 'search-flights',
    loadChildren: () => import('./search-flights/search-flights.module').then( m => m.SearchFlightsPageModule)
  },
  {
    path: 'search-holiday',
    loadChildren: () => import('./search-holiday/search-holiday.module').then( m => m.SearchHolidayPageModule)
  },
  {
    path: 'search-homestay',
    loadChildren: () => import('./search-homestay/search-homestay.module').then( m => m.SearchHomestayPageModule)
  },
  {
    path: 'search-hotel',
    loadChildren: () => import('./search-hotel/search-hotel.module').then( m => m.SearchHotelPageModule)
  },
  {
    path: 'search-train',
    loadChildren: () => import('./search-train/search-train.module').then( m => m.SearchTrainPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'tain-ticket',
    loadChildren: () => import('./tain-ticket/tain-ticket.module').then( m => m.TainTicketPageModule)
  },
  {
    path: 'train-confirm-booking',
    loadChildren: () => import('./train-confirm-booking/train-confirm-booking.module').then( m => m.TrainConfirmBookingPageModule)
  },
  {
    path: 'train-info',
    loadChildren: () => import('./train-info/train-info.module').then( m => m.TrainInfoPageModule)
  },
  {
    path: 'train-payment',
    loadChildren: () => import('./train-payment/train-payment.module').then( m => m.TrainPaymentPageModule)
  },
  {
    path: 'train-result',
    loadChildren: () => import('./train-result/train-result.module').then( m => m.TrainResultPageModule)
  },
  {
    path: 'verification-code',
    loadChildren: () => import('./verification-code/verification-code.module').then( m => m.VerificationCodePageModule)
  },
  {
    path: 'select-language',
    loadChildren: () => import('./select-language/select-language.module').then( m => m.SelectLanguagePageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'homestay-review',
    loadChildren: () => import('./homestay-review/homestay-review.module').then( m => m.HomestayReviewPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
