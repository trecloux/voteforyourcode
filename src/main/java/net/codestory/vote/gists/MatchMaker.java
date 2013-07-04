package net.codestory.vote.gists;

import java.util.*;
import java.util.concurrent.*;

import net.codestory.vote.repository.*;

import org.apache.commons.lang.*;

public class MatchMaker {
  private final Random random;
  private final Gists gists;
  private final VoteRepository voteRepository;
  private final Map<String, Fight> fightsById;

  public MatchMaker(Random random, Gists gists, VoteRepository voteRepository) {
    this.random = random;
    this.gists = gists;
    this.voteRepository = voteRepository;
    fightsById = new ConcurrentHashMap<>();
    loadSavedVotes();
  }

  private void loadSavedVotes() {
    for (Vote vote : voteRepository.all()) {
      Gist winner = gists.findByName(vote.winner);
      Gist looser = gists.findByName(vote.looser);

      if ((winner != null) && (looser != null)) {
        winner.rank().beats(looser.rank());
      }
    }
  }

  public Fight randomFight() {
    String uniqueId = uniqueId();

    int nbGists = gists.size();
    int left = random.nextInt(nbGists);
    int right = random.nextInt(nbGists);
    while (left == right) {
      right = random.nextInt(nbGists);
    }

    Fight fight = new Fight(uniqueId, gists.get(left), gists.get(right));
    fightsById.put(uniqueId, fight);

    return fight;
  }

  public void fightWonByLeft(String uniqueId) {
    Fight fight = fightsById.remove(uniqueId);
    if (null != fight) {
      fightWon(fight.left(), fight.right());
    }
  }

  public void fightWonByRight(String uniqueId) {
    Fight fight = fightsById.remove(uniqueId);
    if (null != fight) {
      fightWon(fight.right(), fight.left());
    }
  }

  private void fightWon(Gist winner, Gist looser) {
    voteRepository.save(new Vote(winner.name(), looser.name()));
    winner.rank().beats(looser.rank());
  }

  private static String uniqueId() {
    return RandomStringUtils.random(32, true, true);
  }
}