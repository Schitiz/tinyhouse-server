import merge from 'lodash.merge';
import { viewResolvers } from './Viewer';
import { userResolvers } from './User';
import { listingResolvers } from './Listing';
import { bookingResolver } from './Bookings';

export const resolvers = merge(
  userResolvers,
  viewResolvers,
  listingResolvers,
  bookingResolver,
);
