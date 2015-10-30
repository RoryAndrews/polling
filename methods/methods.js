/**
 * Created by Rory on 10/29/2015.
 */
Meteor.methods({

  addVote: function(voteID, pollID) {
    // create the incrementing object so we can add to the corresponding vote
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;

    // increment the number of votes for this choice
    Polls.update(
        { _id: pollID },
        { $inc: action }
    );
  },

  addPoll: function(newPoll) {
    Polls.insert(newPoll);
  }
});